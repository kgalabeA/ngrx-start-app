import { Geo, User } from '../core';

export interface AppState{
  readonly geo:Geo[],
  readonly user:User[]
}
