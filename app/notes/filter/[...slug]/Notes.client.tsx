'use client';

import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

import { useParams } from 'next/navigation';

export default function FilterNotesClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const selectTag = slug[0] === 'all' ? undefined : slug[0];

  const { data } = useQuery({
    queryKey: ['tag', selectTag],
    queryFn: () => fetchNotes('', 1, 12, selectTag),
    refetchOnMount: false,
  });

  return <NoteList notes={data?.notes ?? []} />;
}
