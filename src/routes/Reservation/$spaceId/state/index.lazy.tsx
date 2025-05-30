import { getReservationInfo } from '@/api/getReservationInfo';
import { ReservationCalendar } from '@/components/ReservationCalendar/ReservationCalendar.tsx';
import { ReservationStateCard } from '@/components/ReservationStateCard/ReservationStateCard';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  StyledContainer,
  StyledDivider,
  StyledGrid,
  StyledNoResults,
  StyledTitle,
} from './-index.style';

export const Route = createLazyFileRoute('/Reservation/$spaceId/state/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { spaceId } = Route.useParams();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

  const { data: reservations = [] } = useQuery({
    queryKey: ['reservations', spaceId, formattedDate],
    queryFn: () => getReservationInfo(Number(spaceId), formattedDate),
    enabled: !!spaceId,
  });

  const selectedDateStr = dayjs(selectedDate).format('YYYY-MM-DD');
  const filteredReservations = reservations.filter(
    (reservation) => dayjs(reservation.startDateTime).format('YYYY-MM-DD') === selectedDateStr,
  );

  return (
    <StyledContainer>
      <StyledTitle>예약 현황 조회</StyledTitle>
      <ReservationCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      <StyledDivider />
      <StyledGrid>
        {filteredReservations.length > 0 ? (
          filteredReservations.map((reservation) => (
            <ReservationStateCard key={reservation.id} spaceId={Number(spaceId)} {...reservation} />
          ))
        ) : (
          <StyledNoResults>예약된 내역이 없습니다.</StyledNoResults>
        )}
      </StyledGrid>
    </StyledContainer>
  );
}
