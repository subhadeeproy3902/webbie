import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Markdown from "react-markdown";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "bg-zinc-900": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",
              {
                "bg-purple-950 border-purple-700 text-zinc-200": isUserMessage,
              }
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>

          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-base  font-semibold text-zinc-100">
                {isUserMessage ? "You" : "Webbie"}
              </span>
            </div>
            <div className="text-sm md:text-base font-normal py-2.5 text-zinc-200 prose prose-sm whitespace-pre-wrap break-words markdown">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
