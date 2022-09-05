(() => {
  type Gender = 'M'|'F';

  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

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
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({
      birthdate,
      email,
      gender,
      name,
      role
    } : UserProps ){
      super({name, gender, birthdate});
      this.lastAccess = new Date();
      this.email= email;
      this.role= role;
    }

    checkCredentials() {
      return true;
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

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    } : UserSettingsProps) {
      super({email, role, name, gender, birthdate});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

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