import { pallet } from '../theme';

export enum Status {
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  PENDING_APPROVAL = 'Pending Aproval',
  NOT_STARTED = 'Not Started',
  ONGOING = 'Ongoing',
  FINISHED = 'Finished',
}

type StatusColorType = Partial<Record<keyof typeof Status, string>>;
export const StatusColor: StatusColorType = {
  APPROVED: pallet.green[500],
  REJECTED: pallet.red[500],
  PENDING_APPROVAL: pallet.orange[500],
  NOT_STARTED: pallet.grey[500],
  ONGOING: pallet.yellow[500],
  FINISHED: pallet.green[500],
};
export type StatusKeys = keyof typeof Status;
