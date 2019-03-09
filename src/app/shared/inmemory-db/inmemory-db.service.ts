import { InMemoryDbService } from "angular-in-memory-web-api";
import { CountryDB } from "./countries";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 1,
        email: "mmartincorr@uoc.edu",
        password: "asdf"
      }
    ];
    return {
      users: users
    };
  }
}
