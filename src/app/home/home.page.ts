import { Component, OnInit } from '@angular/core';
import { KeyVaultService } from '../core/key-vault.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  key: string;
  constructor(private vault: KeyVaultService) {}

  ngOnInit() {
    this.getKey();
  }

  clear() {
    this.vault.clear();
    this.getKey();
  }

  async getKey() {
    this.key = (await this.vault.getKey()) || 'No key found';
  }

  async setKey() {
    await this.vault.setKey('Now we have a key!');
    this.getKey();
  }
}
