// components/Background.jsx
import React from "react";
import { Code2, BookOpen, Users, Brain, Network, Database } from "lucide-react";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200/30 rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200/30 rounded-lg animate-spin slow-spin"></div>
      <div className="absolute bottom-20 right-40 w-12 h-12 bg-orange-200/30 rounded-full animate-pulse"></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-pink-200/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-indigo-200/30 rotate-12 animate-pulse"></div>

      {/* Tech-themed floating icons */}
      <div className="absolute top-32 right-1/4 text-emerald-300/20 animate-float">
        <Code2 size={40} />
      </div>
      <div className="absolute bottom-32 left-1/4 text-blue-300/20 animate-float-delay">
        <BookOpen size={35} />
      </div>
      <div className="absolute top-1/2 left-16 text-purple-300/20 animate-float-slow">
        <Users size={30} />
      </div>
      <div className="absolute top-1/3 right-16 text-orange-300/20 animate-float">
        <Brain size={32} />
      </div>
      <div className="absolute bottom-1/3 left-1/2 text-pink-300/20 animate-float-delay">
        <Network size={28} />
      </div>
      <div className="absolute top-3/4 right-1/2 text-indigo-300/20 animate-float-slow">
        <Database size={26} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default Background;
