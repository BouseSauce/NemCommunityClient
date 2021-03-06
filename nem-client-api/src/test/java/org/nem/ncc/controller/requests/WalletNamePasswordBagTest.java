package org.nem.ncc.controller.requests;

import net.minidev.json.JSONObject;
import org.hamcrest.core.IsEqual;
import org.junit.*;
import org.nem.core.crypto.PrivateKey;
import org.nem.core.model.Address;
import org.nem.core.serialization.*;
import org.nem.ncc.test.*;
import org.nem.ncc.wallet.*;

import java.util.*;
import java.util.function.*;

public class WalletNamePasswordBagTest {

	//region serialization

	@Test
	public void bagCanBeDeserializedWithAllRequiredParameters() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		Assert.assertThat(bag.getName(), IsEqual.equalTo(new WalletName("name")));
		Assert.assertThat(bag.getPassword(), IsEqual.equalTo(new WalletPassword("password")));
	}

	@Test
	public void bagCannotBeDeserializedWithMissingRequiredParameters() {
		// Arrange:
		final List<Consumer<Void>> actions = Arrays.asList(
				v -> createBagFromJson(null, "pass"),
				v -> createBagFromJson("wal", null));

		// Assert:
		for (final Consumer<Void> action : actions) {
			ExceptionAssert.assertThrows(
					v -> action.accept(null),
					SerializationException.class);
		}
	}

	private static JSONObject createJson(final String name, final String password) {
		final JSONObject jsonObject = new JSONObject();
		jsonObject.put("wallet", name);
		jsonObject.put("password", password);
		return jsonObject;
	}

	private static WalletNamePasswordBag createBagFromJson(final String name, final String password) {
		return new WalletNamePasswordBag(Utils.createDeserializer(createJson(name, password)));
	}

	//endregion

	//region getAccountPrivateKey

	@Test
	public void getAccountPrivateKeyFailsIfNotSpecified() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		assertThrowsMissingPropertyException(bag::getAccountPrivateKey, "accountKey");
	}

	@Test
	public void getAccountPrivateKeyReturnsKeyIsSpecified() {
		// Arrange:
		final JSONObject jsonObject = createJson("name", "password");
		jsonObject.put("accountKey", "0011223344");

		// Act:
		final WalletNamePasswordBag bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

		// Assert:
		Assert.assertThat(bag.getAccountPrivateKey(), IsEqual.equalTo(PrivateKey.fromHexString("0011223344")));
	}

	//endregion

	//region getNewName

	@Test
	public void getNewNameFailsIfNameIsNotSpecified() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		assertThrowsMissingPropertyException(bag::getNewName, "newName");
	}

	@Test
	public void getNewNameReturnsNameIfSpecified() {
		// Arrange:
		final JSONObject jsonObject = createJson("name", "password");
		jsonObject.put("newName", "blah");

		// Act:
		final WalletNamePasswordBag bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

		// Assert:
		Assert.assertThat(bag.getNewName(), IsEqual.equalTo(new WalletName("blah")));
	}

	//endregion

	//region getNewPassword

	@Test
	public void getNewPasswordFailsIfPasswordIsNotSpecified() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		assertThrowsMissingPropertyException(bag::getNewPassword, "newPassword");
	}

	@Test
	public void getNewPasswordReturnsPasswordIfSpecified() {
		// Arrange:
		final JSONObject jsonObject = createJson("name", "password");
		jsonObject.put("newPassword", "pwd1");

		// Act:
		final WalletNamePasswordBag bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

		// Assert:
		Assert.assertThat(bag.getNewPassword(), IsEqual.equalTo(new WalletPassword("pwd1")));
	}

	//endregion

	//region getAccountAddress

	@Test
	public void getAccountAddressFailsIfAddressIsNotSpecified() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		assertThrowsMissingPropertyException(bag::getAccountAddress, "account");
	}

	@Test
	public void getAccountAddressReturnsAddressIfSpecified() {
		// Arrange:
		final Address address = Utils.generateRandomAddress();
		final JSONObject jsonObject = createJson("name", "password");
		jsonObject.put("account", address.getEncoded());

		// Act:
		final WalletNamePasswordBag bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

		// Assert:
		Assert.assertThat(bag.getAccountAddress(), IsEqual.equalTo(address));
	}

	//endregion

	//region getLabel

	@Test
	public void getLabelReturnsEmptyStringIfLabelIsNotSpecified() {
		// Act:
		final WalletNamePasswordBag bag = createBagFromJson("name", "password");

		// Assert:
		Assert.assertThat(bag.getLabel().isEmpty(), IsEqual.equalTo(true));
	}

	@Test
	public void getLabelReturnsLabelIfSpecified() {
		// Arrange:
		final JSONObject jsonObject = createJson("name", "password");
		jsonObject.put("label", "Alice");

		// Act:
		final WalletNamePasswordBag bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

		// Assert:
		Assert.assertThat(bag.getLabel(), IsEqual.equalTo("Alice"));
	}

	//endregion

	private static void assertThrowsMissingPropertyException(final Supplier<Object> consumer, final String propertyName) {
		ExceptionAssert.assertThrows(
				v -> consumer.get(),
				MissingRequiredPropertyException.class,
				ex -> Assert.assertThat(ex.getPropertyName(), IsEqual.equalTo(propertyName)));
	}
}