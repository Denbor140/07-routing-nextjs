import { fetchNotes } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import FilterNotesClient from './Notes.client';

interface NotesTagPageProps {
  params: { slug: string };
}

export default async function NotesTagPage({ params }: NotesTagPageProps) {
  const selectTag = params.slug === 'all' ? '' : params.slug;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['tag', selectTag],
    queryFn: () => fetchNotes('', 1, 12, selectTag),
  });

  return (
    <div>
      <main>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <FilterNotesClient />
        </HydrationBoundary>
      </main>
    </div>
  );
}
