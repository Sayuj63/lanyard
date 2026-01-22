import { NotificationBarProps } from '@/lib/types';
import { NOTIFICATION_MESSAGE } from '@/lib/constants';

interface NotificationBarComponentProps {
  message?: string;
  backgroundColor?: string;
  textColor?: string;
  isScrolling?: boolean;
}

export default function NotificationBar({
  message = NOTIFICATION_MESSAGE,
  backgroundColor = 'bg-black',
  textColor = 'text-ln-yellow',
  isScrolling = false,
}: NotificationBarComponentProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full ${backgroundColor} ${textColor} py-2 px-4`}>
      <div className="max-w-container mx-auto">
        <div className={`text-center text-sm font-medium ${isScrolling ? 'animate-pulse' : ''}`}>
          {message}
        </div>
      </div>
    </div>
  );
}