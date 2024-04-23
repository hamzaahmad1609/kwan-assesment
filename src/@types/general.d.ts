export { }

declare global {
    interface IusersResponse {
        results: IUser[];
        info: IInfo;
    }
    interface IInfo {
        seed: string;
        results: number;
        page: number;
        version: string;
    }
    interface IUser {
        gender: string;
        name: IName;
        location: ILocation;
        email: string;
        login: ILogin;
        dob: IDob;
        registered: IDob;
        phone: string;
        cell: string;
        id: Id;
        picture: IPicture;
        nat: string;
    }
    interface IPicture {
        large: string;
        medium: string;
        thumbnail: string;
    }
    interface IId {
        name: string;
        value: string;
    }
    interface IDob {
        date: string;
        age: number;
    }
    interface ILogin {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    }
    interface ILocation {
        street: IStreet;
        city: string;
        state: string;
        country: string;
        postcode: string;
        coordinates: ICoordinates;
        timezone: ITimezone;
    }
    interface ITimezone {
        offset: string;
        description: string;
    }
    interface ICoordinates {
        latitude: string;
        longitude: string;
    }
    interface IStreet {
        number: number;
        name: string;
    }
    interface IName {
        title: string;
        first: string;
        last: string;
    }
}