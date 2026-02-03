import MainInvite from '@/components/MainInvite';

export default async function InvitePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const guest = typeof params.guest === 'string' ? params.guest : undefined;

  return <MainInvite guestName={guest} />;
}
