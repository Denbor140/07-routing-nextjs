// import { fetchNoteByTag } from '@/lib/api';

// interface NotesTagPageProps {
//   params: Promise<{ tag: string }>;
// }

// export default async function NotesTagPage({ params }: NotesTagPageProps) {
//   const { tag } = await params;
//   console.log(tag);

//   const filterTag = tag === 'all' ? undefined : tag;
//   const res = await fetchNoteByTag(filterTag);
//   console.log(res);

//   return <div></div>;
// }

import SidebarNotes from '../@sidebar/default';
import NotesClient from '../../Notes.client';

interface PageProps {
  params: { tag: string };
}

export default function FilterPage({ params }: PageProps) {
  const { tag } = params;

  return (
    <div>
      <aside>
        <SidebarNotes />
      </aside>
      <main>
        <NotesClient tag={tag} />
      </main>
    </div>
  );
}
