import { useEffect, useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../../components";
import { createThreadUseCase, postQuestionsUseCase } from "../../../core/use_cases";
import { Link } from "react-router-dom";

interface Message {
  text: string;
  isGpt: boolean;
}

export const AssistantPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessage] = useState<Message[]>([]);
  const [threadId, setThreadId] = useState<string>();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  /**============================
   * TOGGLE DARK MODE FUNCTION
   * @returns {void}
  ===============================*/
  const toggleDarkMode = (): void => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    window.location.reload();
  };

  const handlePost = async (text: string) => {

    if (!threadId) return;

    setIsLoading(true);

    setMessage((prev) => [...prev, { text: text, isGpt: false }]);

    const replies = await postQuestionsUseCase(threadId, text);

    setIsLoading(false);

    for (const reply of replies) {
      for (const message of reply.content) {
        setMessage((prev) => [...prev, { text: message, isGpt: (reply.role === 'assistant'), info: reply }]);
      }
    }

  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // GET THREAD AND IF IT DOES NOT EXIST CREATE IT //
  useEffect(() => {

    const threadId = localStorage.getItem('threadId');

    (threadId)
      ? setThreadId(threadId)
      : createThreadUseCase()
        .then((id) => {
          setThreadId(id);
          localStorage.setItem('threadId', id);
        });

  }, []);

  // THIS IS WHERE THE THREADID IS SHOWN IN THE CHAT //
  useEffect(() => {
    if (threadId) setMessage((prev) => [...prev, { text: `Número de thread ${threadId}`, isGpt: true }]);
  }, [threadId])

  return (

    <div className="flex flex-col h-full">

      {/*=====================
        BACK TO HOME BUTTON 
      ========================*/}
      <div className="mb-4 p-2 w-full flex items-center justify-between">

        <Link to="/" className="flex items-center group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="dark:fill-white h-6 mr-2 group-hover:fill-blue-600 dark:group-hover:fill-blue-300 transition-colors duration-200"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L109.2 224 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="relative w-14 h-8 bg-yellow-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[7px] after:start-2 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
            <svg
              className="absolute right-2 top-2 h-4 w-4 text-white dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
            </svg>
            <svg
              className="absolute left-2 top-2 h-4 w-4 text-gray-400 dark:text-yellow-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.4-.2-8.1-.2c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0z" />
            </svg>
          </div>
        </label>

      </div>

      {/* CHAT CONTAINER */}
      <div className="chat-container flex-auto">

        {/* CHAT MESSAGES */}
        <div className="chat-messages">

          <div className="grid grid-cols-12 gap-y-2">

            {/* WELCOME */}
            <GptMessage text="Saludos, soy Nova, en qué puedo ayudarte?" />

            {/* MY MESSAGES */}
            {messages.map((message, index) => (
              message.isGpt
                ? (<GptMessage key={index} text={message.text} />)
                : (<MyMessage key={index} text={message.text} />)
            ))}

            {/* TYPING LOADER */}
            {isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader className="fade-in" />
              </div>
            )}

          </div>

        </div>

        {/* CHAT MESSAGE BOX */}
        <TextMessageBox
          onSendMessage={handlePost}
          placeholder="Escribe lo que deseas"
          disableCorrections
        />

      </div>

    </div>

  )

}
