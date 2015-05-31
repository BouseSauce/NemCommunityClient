package org.nem.ncc.controller.requests;

import org.nem.core.crypto.PublicKey;
import org.nem.core.model.Address;
import org.nem.core.model.primitive.Amount;
import org.nem.core.serialization.Deserializer;
import org.nem.ncc.wallet.*;

/**
 * A request containing all information necessary to create importance transfer.
 */
public class TransferImportanceRequest extends AccountWalletPasswordRequest {
	private final int type;
	private final int hoursDue;
	private final Amount fee;
	private final PublicKey publicKey;

	/**
	 * Creates a transfer importance request.
	 *
	 * @param address The account address.
	 * @param walletName The wallet name.
	 * @param password The password.
	 */
	public TransferImportanceRequest(
			final Address address,
			final WalletName walletName,
			final WalletPassword password,
			final int type,
			final int hoursDue,
			final Amount fee,
			final PublicKey publicKey) {
		super(address, walletName, password);
		this.type = type;
		this.hoursDue = hoursDue;
		this.fee = fee;
		this.publicKey = publicKey;
	}

	/**
	 * Deserializes a transfer importance request.
	 *
	 * @param deserializer The deserializer.
	 */
	public TransferImportanceRequest(final Deserializer deserializer) {
		super(deserializer);
		this.type = deserializer.readInt("type");
		this.hoursDue = deserializer.readInt("hoursDue");
		this.fee = Amount.readFrom(deserializer, "fee");
		this.publicKey = deserializer.readOptionalObject("publicKey", PublicKey::new);
	}

	/**
	 * Gets the wallet password.
	 *
	 * @return The wallet password.
	 */
	public WalletPassword getPassword() {
		return this.getWalletPassword();
	}

	/**
	 * Gets the type of transfer.
	 *
	 * @return The type of transfer (multisig or normal).
	 */
	public int getType() {
		return this.type;
	}

	/**
	 * Gets the hours due.
	 *
	 * @return The hours due.
	 */
	public int getHoursDue() {
		return this.hoursDue;
	}

	/**
	 * Gets the fee.
	 *
	 * @return The fee.
	 */
	public Amount getFee() {
		return this.fee;
	}

	/**
	 * Gets the (delegated account) public key.
	 *
	 * @return The public key.
	 */
	public PublicKey getPublicKey() {
		return this.publicKey;
	}

}
