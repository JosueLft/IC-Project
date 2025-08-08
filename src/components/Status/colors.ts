import { pallet } from '../../theme';
import { StatusEnum } from '../../types/status';

const StatusColorMap: { [key in StatusEnum]: string } = {
  [StatusEnum.APPROVED]: pallet.green[500],
  [StatusEnum.REJECTED]: pallet.red[500],
  [StatusEnum.PENDING_APPROVAL]: pallet.orange[500],
  [StatusEnum.NOT_STARTED]: pallet.grey[500],
  [StatusEnum.ONGOING]: pallet.yellow[500],
  [StatusEnum.FINISHED]: pallet.green[500],
  [StatusEnum.COMPLETED]: pallet.violet[500],
  [StatusEnum.REVERTED]: pallet.red[500],
};

export const StatusColor = new Proxy(StatusColorMap, {
  get: (target, prop: string) =>
    prop in target ? target[prop as keyof typeof StatusColorMap] : '#FFFFFF',
});
