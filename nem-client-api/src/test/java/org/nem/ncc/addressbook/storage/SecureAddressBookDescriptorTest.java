package org.nem.ncc.addressbook.storage;

import org.mockito.Mockito;
import org.nem.ncc.addressbook.AddressBookPassword;
import org.nem.ncc.storable.entity.storage.SecureStorableEntityDescriptorTest;

public class SecureAddressBookDescriptorTest extends SecureStorableEntityDescriptorTest {

	@Override
	protected AddressBookDescriptor createDescriptor() {
		return Mockito.mock(AddressBookDescriptor.class);
	}

	@Override
	protected void createSecureDescriptor(final TestContext context) {
		final AddressBookDescriptor descriptor = this.createDescriptor();
		context.setDescriptor(descriptor);
		context.setSecureDescriptor(new SecureAddressBookDescriptor(descriptor, new AddressBookPassword(context.getPassword())));
	}
}