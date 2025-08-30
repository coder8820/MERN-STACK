import { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./const.js";
import Answers from "./Components/Answers.jsx";

// Enhanced Code Block Component
const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="relative group my-3">
      <div className="bg-gray-900/90 border border-gray-600/50 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-600/50">
          <span className="text-sm text-gray-300 font-mono">{language}</span>
          <button
            onClick={copyCode}
            className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-200 text-gray-300 hover:text-white"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-gray-100 font-mono leading-relaxed whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Enhanced Answer Formatter Component
const FormattedAnswer = ({ text }) => {
  const formatText = (text) => {
    // Handle arrays of text
    if (Array.isArray(text)) {
      text = text.join('\n\n');
    }

    // Split text by code blocks (```language...code...```)
    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        const textPart = text.slice(lastIndex, match.index).trim();
        if (textPart) {
          parts.push({ type: 'text', content: textPart });
        }
      }

      // Add code block
      const language = match[1] || 'javascript';
      const code = match[2].trim();
      parts.push({ type: 'code', content: code, language });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex).trim();
      if (remainingText) {
        parts.push({ type: 'text', content: remainingText });
      }
    }

    // If no code blocks found, treat as regular text
    if (parts.length === 0) {
      parts.push({ type: 'text', content: text });
    }

    return parts;
  };

  const formatTextContent = (content) => {
    return content
      .split('\n')
      .map((line, index) => (
        <p key={index} className="mb-2 last:mb-0 leading-relaxed">
          {line || <br />}
        </p>
      ));
  };

  const formattedParts = formatText(text);

  return (
    <div className="space-y-4">
      {formattedParts.map((part, index) => (
        <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
          {part.type === 'code' ? (
            <CodeBlock code={part.content} language={part.language} />
          ) : (
            <div className="text-gray-100 leading-relaxed">
              {formatTextContent(part.content)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Loading Animation Component
const LoadingDots = () => (
  <div className="flex items-center space-x-1 p-4">
    <div className="flex space-x-1">
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce shadow-lg"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.1s'}}></div>
      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}></div>
    </div>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-3 animate-pulse font-medium">
      AI is thinking...
    </span>
  </div>
);

// Enhanced Copy Button Component
const CopyButton = ({ text, type }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(Array.isArray(text) ? text.join('\n') : text);
      setCopied(true);
      
      // Reset after animation
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          p-2 rounded-xl transition-all duration-300 transform hover:scale-110 group
          ${type === 'q' 
            ? 'bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/30' 
            : 'bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-400/30'
          }
          ${copied ? 'animate-bounce' : ''}
        `}
      >
        {copied ? (
          <svg 
            className="w-4 h-4 text-emerald-400 animate-checkmark" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg 
            className={`w-4 h-4 transition-all duration-300 ${
              type === 'q' ? 'text-blue-400' : 'text-emerald-400'
            } ${isHovered ? 'animate-wiggle' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      
      {/* Tooltip */}
      {isHovered && !copied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg animate-fadeIn whitespace-nowrap">
          Copy {type === 'q' ? 'Question' : 'Answer'}
        </div>
      )}
      
      {/* Success message */}
      {copied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-lg animate-fadeIn whitespace-nowrap">
          Copied! ✨
        </div>
      )}
    </div>
  );
};

// Skeleton loader for history items
const HistorySkeleton = () => (
  <div className="animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="p-2 border-b border-zinc-800/50 rounded-lg">
        <div className="h-4 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded w-3/4 animate-shimmer"></div>
      </div>
    ))}
  </div>
);

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setResentHistory] = useState(JSON.parse(localStorage.getItem('history')) || []);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  const askQuestion = async () => {
    if (!question && !selectedHistory) return false;
    if (isLoading) return false;

    setIsLoading(true);

    const currentQuestion = question || selectedHistory;
    
    if(question) {
      if(localStorage.getItem('history')){
        let history = JSON.parse(localStorage.getItem('history'));
        history = [question, ...history];
        localStorage.setItem("history", JSON.stringify(history));
        setResentHistory(history);
      } else {
        localStorage.setItem("history", JSON.stringify([question]));
        setResentHistory([question]);
      }
    }

    setResult(prev => [
      ...prev,
      { type: "q", text: currentQuestion }
    ]);

    setSelectedHistory(null);
    setQuestion("");

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: currentQuestion,
              },
            ],
          },
        ],
      };

      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      response = await response.json();
      let dataString = response.candidates[0].content.parts[0].text;
      dataString = dataString.split("* ").map((item) => item.trim());
      dataString = dataString.filter((item) => item !== "");

      setTimeout(() => {
        setResult(prev => [
          ...prev,
          { type: "a", text: dataString },
        ]);
        setIsLoading(false);
      }, 800);

    } catch (error) {
      console.error("Error fetching response:", error);
      setResult(prev => [
        ...prev,
        { type: "a", text: ["Sorry, there was an error processing your request. Please try again."] },
      ]);
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setIsHistoryLoading(true);
    setTimeout(() => {
      localStorage.removeItem('history');
      setResentHistory([]);
      setIsHistoryLoading(false);
    }, 800);
  }

  const searchHistory = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
    
    if (searchTerm === '') {
      setResentHistory(storedHistory);
    } else {
      const filteredHistory = storedHistory.filter(item => 
        typeof item === 'string' && item.toLowerCase().includes(searchTerm)
      );
      setResentHistory(filteredHistory);
    }
  }

  useEffect(() => {
    if(selectedHistory) {
      setQuestion(selectedHistory);
    }
  }, [selectedHistory]);

  return (
    <div className="grid grid-cols-5 h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Enhanced Sidebar */}
      <div className="sidebar col-span-1 bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl p-4 border-r border-zinc-600/50 shadow-2xl relative z-10">
        <h2 className="text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold mb-6 animate-gradient-x">
          Recent Search
        </h2>
        
        <div className="relative mb-6 group">
          <input
            type="text"
            placeholder="Search your history..."
            onChange={searchHistory}
            className="w-full p-3 rounded-2xl outline-none bg-zinc-700/50 text-white border border-zinc-500/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-500 placeholder-gray-400 backdrop-blur-sm hover:bg-zinc-600/50"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <button 
          onClick={clearHistory} 
          disabled={isHistoryLoading}
          className="p-3 flex justify-between items-center cursor-pointer bg-gradient-to-r from-red-600/20 to-red-500/20 hover:from-red-600/40 hover:to-red-500/40 rounded-2xl mt-1 w-full transition-all duration-500 transform hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed group border border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20"
        >
          <span className="group-hover:text-red-300 transition-colors duration-300 font-medium">Clear History</span>
          {isHistoryLoading ? (
            <div className="w-5 h-5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin"></div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ef4444" className="group-hover:animate-wiggle transition-colors duration-300">
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
          )}
        </button>

        <div className="questions text-left mt-6">
          <ul className="mt-3 max-h-60 overflow-auto space-y-2 pr-2">
            {isHistoryLoading ? (
              <HistorySkeleton />
            ) : recentHistory.length > 0 ? (
              recentHistory.map((item, index) => (
                <li 
                  onClick={() => setSelectedHistory(item)} 
                  key={index} 
                  className="p-2 text-cyan-300 cursor-pointer hover:bg-gradient-to-r hover:from-zinc-600/50 hover:to-zinc-500/50 overflow-hidden text-ellipsis whitespace-nowrap hover:text-white border border-zinc-700/50 hover:border-cyan-400/50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 animate-slideInLeft backdrop-blur-sm"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center justify-between group">
                    <span className="truncate flex-1">
                      {typeof item === 'string' ? item : 'Invalid history item'}
                    </span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-400 text-center italic animate-fadeIn">
                <div className="flex flex-col items-center space-y-2">
                  <svg className="w-8 h-8 text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>No history yet</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/*----------   Main Chat Content here ------------  */}

      <div className="main-content col-span-4 p-8 relative z-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 text-center m-auto text-5xl font-bold mb-8 animate-gradient-x hover:animate-pulse transition-all duration-300 cursor-default">
          Welcome! to ChatGPT(v4)
        </h1>
        
        <div className="container h-96 border border-zinc-600/50 my-4 px-4 py-3 rounded-3xl overflow-y-auto bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <div className="text-white">
            <ul className="space-y-4">
              {result.map((item, index) => (
                <div 
                  key={`${index}-${Date.now()}`}
                  className="animate-messageSlideIn group"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {item.type === "q" ? (
                    <li className="flex items-start justify-end space-x-3 animate-slideInRight">
                      <CopyButton text={item.text} type="q" />
                      <div className="p-2 px-6 text-right bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/30 rounded-3xl rounded-br-lg max-w-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-shimmer-slow"></div>
                        <div className="relative z-10">
                          <Answers ans={item.text} index={index} totalresult={1} type={item.type} />
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="flex items-start animate-slideInLeft">
                      <div className="p-2 text-left bg-zinc-800 from-emerald-700/80 to-emerald-800/80 rounded-2xl rounded-bl-lg w-full shadow-xl border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-[1.005] relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-emerald-300/5 animate-shimmer-slow"></div>
                        <div className="relative z-10">
                          <FormattedAnswer text={item.text} />
                        </div>
                      </div>
                      <CopyButton text={item.text} type="a" />
                    </li>
                  )}
                </div>
              ))}
              
              {/* Enhanced Loading state */}
              {isLoading && (
                <div className="animate-messageSlideIn">
                  <li className="flex items-start space-x-3">
                    <div className="p-2 text-left bg-gradient-to-r from-emerald-700/60 to-emerald-800/60 rounded-3xl rounded-bl-lg shadow-xl border border-emerald-600/30 relative overflow-hidden backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-emerald-300/10 animate-pulse"></div>
                      <div className="relative z-10">
                        <LoadingDots />
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 animate-pulse">
                      <svg className="w-4 h-4 text-emerald-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* Ultra-Enhanced input section */}
        <div className="relative group">
          <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 flex m-auto w-2/3 text-white p-3 rounded-3xl border border-zinc-600/50 shadow-2xl backdrop-blur-xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-shimmer-slow"></div>
            <input
              type="text"
              value={question}
              disabled={isLoading}
              onKeyDown={(e) => e.key === "Enter" && askQuestion()}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="How can I assist you today!"
              className="w-full outline-none p-3 bg-transparent placeholder-gray-400 disabled:opacity-50 transition-all duration-300 relative z-10 text-lg"
            />
            <button
              onClick={askQuestion}
              disabled={isLoading || (!question && !selectedHistory)}
              className="cursor-pointer px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-2xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 relative z-10 font-medium active:scale-95"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="animate-pulse">Sending...</span>
                </div>
              ) : (
                <span className="relative">
                  Ask
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer-fast opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              )}
            </button>
          </div>
          
          {/* Enhanced floating indicator */}
          {(question || selectedHistory) && !isLoading && (
            <div className="absolute -top-12 right-1/6 text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-bounce-gentle flex items-center space-x-2">
              <svg className="w-4 h-4 text-cyan-400 animate-ping" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3"/>
              </svg>
              <span>Press Enter or click Ask</span>
            </div>
          )}

          {/* Typing indicator glow */}
          {question && (
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl animate-pulse-glow pointer-events-none"></div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(-1deg); }
          66% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes shimmer-slow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes shimmer-fast {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes checkmark {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 2s infinite;
        }

        .animate-shimmer-slow {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          background-size: 200% 100%;
          animation: shimmer-slow 3s linear infinite;
        }

        .animate-shimmer-fast {
          animation: shimmer-fast 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-messageSlideIn {
          animation: messageSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-checkmark {
          animation: checkmark 0.6s ease-out;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Enhanced scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 10px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 10px;
        }

        /* Code syntax highlighting styles */
        .hljs-keyword { color: #c678dd; }
        .hljs-string { color: #98c379; }
        .hljs-comment { color: #5c6370; font-style: italic; }
        .hljs-function { color: #61dafb; }
        .hljs-variable { color: #e06c75; }
        .hljs-number { color: #d19a66; }
        .hljs-attr { color: #e5c07b; }
        .hljs-tag { color: #e06c75; }
        .hljs-name { color: #61dafb; }
        .hljs-built_in { color: #56b6c2; }

        /* Pre-formatted text styles */
        pre {
          font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
          line-height: 1.6;
          tab-size: 2;
        }

        code {
          font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 0.9em;
        }

        /* Inline code styles */
        .inline-code {
          background: rgba(55, 65, 81, 0.8);
          padding: 2px 6px;
          rounded: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9em;
          color: #f8fafc;
          border: 1px solid rgba(75, 85, 99, 0.5);
        }

        /* Glow effects */
        .hover:shadow-cyan-500/20:hover {
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.2);
        }
        .hover:shadow-blue-500/20:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
        }
        .hover:shadow-red-500/20:hover {
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.2);
        }
        
      `}</style>
    </div>
  );
}
export default App;