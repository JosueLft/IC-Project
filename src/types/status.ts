export enum StatusEnum {
  SCHEDULED = 'SCHEDULED',
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
  POSTPONED = 'POSTPONED',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
}

export function statusEnumToString(status: StatusEnum): string {
  const statusMap: { [key in StatusEnum]: string } = {
    [StatusEnum.SCHEDULED]: 'Agendado',
    [StatusEnum.ONGOING]: 'Em Andamento',
    [StatusEnum.FINISHED]: 'Finalizado',
    [StatusEnum.CANCELLED]: 'Cancelado',
    [StatusEnum.POSTPONED]: 'Adiado',
    [StatusEnum.CONFIRMED]: 'Confirmado',
    [StatusEnum.COMPLETED]: 'Concluído',
  };

  return status in statusMap ? statusMap[status as StatusEnum] : 'Desconhecido';
}