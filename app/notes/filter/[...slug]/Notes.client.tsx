'use client';

import { fetchNoteByTag } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

import { useParams } from 'next/navigation';

export default function FilterNotesClient() {
  const { tag } = useParams<{ tag: string }>();
  const selectTag = tag;
  console.log(selectTag);

  const { data } = useQuery({
    queryKey: ['tag', { selectTag }],
    queryFn: () => fetchNoteByTag(selectTag),
    refetchOnMount: false,
  });
  console.log(data);

  return <div></div>;
}
