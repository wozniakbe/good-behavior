import { BehaviorType } from './behavior-type.enum';

export interface Behavior {
    id: string;
    name: string;
    type: BehaviorType;
    points: number;
  }
