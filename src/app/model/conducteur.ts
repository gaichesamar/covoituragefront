export class Conducteur {
  private _id!: string;
  private note!: string;
  private _genre!: string;
  private _username!: string;
  private _password!: string;
  private _confirmedPassword!: string;
  private _ville!: string;
  private _permis!: string;
  private _email!: string;
  private _cin !: string;
  private _firstName!: string;
  private _lastName!: string;
  private _tel!: string;
  private _photo!: string;
  private _adress!: string;
  private _birthdate!: Date;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get confirmedPassword(): string {
    return this._confirmedPassword;
  }

  set confirmedPassword(value: string) {
    this._confirmedPassword = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get permis(): string {
    return this._permis;
  }

  set permis(value: string) {
    this._permis = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get cin(): string {
    return this._cin;
  }

  set cin(value: string) {
    this._cin = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get adress(): string {
    return this._adress;
  }

  set adress(value: string) {
    this._adress = value;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(value: Date) {
    this._birthdate = value;
  }
}
