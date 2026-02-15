import { fetchNoteByTag } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import FilterNotesClient from './Notes.client';

interface NotesTagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function NotesTagPage({ params }: NotesTagPageProps) {
  const { tag } = await params;
  const selectTag = tag;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['tag', { selectTag }],
    queryFn: () => fetchNoteByTag(selectTag),
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
