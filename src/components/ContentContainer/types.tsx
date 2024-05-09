export interface SingleTread {
  created_at: string;
  id: string;
  question: string;
  question_id: number;
  reply_to: string;
  subject: string;
  subject_id: number;
  team: string;
  text: string;
  thread_id: string;
  score?: number;
}
