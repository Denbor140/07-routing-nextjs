import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

const PER_PAGE = 12;

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: {
    searchText?: string;
    page: number;
  };
}

export default async function NotesPage({
  params,
  searchParams,
}: NotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];

  const searchText = searchParams?.searchText ?? '';
  const page = searchParams?.page ?? 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', searchText, page, tag],
    queryFn: () => fetchNotes(searchText, page, PER_PAGE, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient clientPage={page} clientSearchText={searchText} tag={tag} />
    </HydrationBoundary>
  );
}
