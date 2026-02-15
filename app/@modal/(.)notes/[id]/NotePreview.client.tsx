'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <button onClick={handleClose} className={css.backBtn}>
            ← Назад
          </button>

          <div className={css.header}>
            <h2>{note.title}</h2>
            {note.tag && <span className={css.tag}>{note.tag}</span>}
          </div>

          <div className={css.content}>{note.content}</div>

          <div className={css.date}>{note.createdAt}</div>
        </div>
      </div>
    </Modal>
  );
}
