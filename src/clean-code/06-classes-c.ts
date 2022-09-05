(() => {
  // Aplicando el principio de responsabilidad única.
  // Priorizar la composición frente a la herencia.

  type Gender = 'M'|'F';

  interface PersonProps {
    birthdate: Date
    gender: Gender,
    name: string,
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor( {name, gender, birthdate} : PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({
      email,
      role
    } : UserProps ){
      this.lastAccess = new Date();
      this.email= email;
      this.role= role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder
    } : SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }
  
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthdate,
    email,
    gender,
    lastOpenFolder,
    name,
    role,
    workingDirectory,
    } :UserSettingsProps) {
      this.person = new Person({birthdate, gender, name});
      this.user = new User({email, role});
      this.settings = new Settings({lastOpenFolder, workingDirectory});
    }
  }

  // const me = new Person('Rodwyn','M', new Date('1987-03-22'));
  // console.log({me});

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'rodwyn@gmail.com',
    role: 'admin',
    name: 'Rodwyn',
    gender: 'M',
    birthdate: new Date('1987-03-22')
  }
  );

  console.log({userSettings});
})();