import { fetchNoteByTag } from '@/lib/api';

interface NotesTagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function NotesTagPage({ params }: NotesTagPageProps) {
  const { tag } = await params;
  console.log(tag);

  const filterTag = tag === 'all' ? undefined : tag;
  const res = await fetchNoteByTag(filterTag);
  console.log(res);

  return <div></div>;
}
