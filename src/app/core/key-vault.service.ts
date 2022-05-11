import { Injectable } from '@angular/core';
import { Vault, VaultType } from '@ionic-enterprise/identity-vault';

@Injectable({
  providedIn: 'root',
})
export class KeyVaultService {
  private vault = new Vault({
    key: 'foo.bar.keyvault',
    type: VaultType.SecureStorage,
  });

  clear(): Promise<void> {
    return this.vault.clear();
  }

  setKey(value: string): Promise<void> {
    return this.vault.setValue('my-key', value);
  }

  getKey(): Promise<string> {
    return this.vault.getValue('my-key');
  }
}
