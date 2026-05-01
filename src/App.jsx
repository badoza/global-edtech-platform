import React from 'react';
import { BookOpen, Calendar, Clock, Bell } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
      <header className="mb-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Global Excellence Academy
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Welcome back, Student</p>
      </header>

      {/* Premium Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Attendance Widget */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Attendance</h2>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Calendar size={24} />
            </div>
          </div>
          <p className="text-5xl font-black text-blue-600 mt-6">94%</p>
          <p className="text-sm text-slate-400 mt-2">Excellent standing</p>
        </div>

        {/* Next Class Widget */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Next Class</h2>
            <div className="p-3 bg-slate-800 rounded-2xl">
              <Clock size={24} />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-3xl font-bold">Physics</p>
            <p className="text-slate-400 mt-1">10:00 AM • Room 302</p>
          </div>
        </div>

        {/* Notices Widget */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Notices</h2>
            <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl">
              <Bell size={24} />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold text-slate-800">Holiday Update</p>
            <p className="text-sm text-slate-400 mt-1">School closed on Friday.</p>
          </div>
        </div>

        {/* Hero Video Widget (Span 2 columns) */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
          <h2 className="text-lg font-bold mb-4">Latest Video Lecture</h2>
          <div className="flex-1 bg-slate-100 rounded-2xl flex items-center justify-center min-h-[200px] border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors">
            <p className="text-slate-500 font-medium flex items-center gap-2">
              <BookOpen size={20} /> Tap to Play Chapter 4
            </p>
          </div>
        </div>

        {/* Syllabus Widget */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow cursor-pointer">
          <h2 className="text-lg font-bold mb-4">Syllabus & PDFs</h2>
          <div className="flex-1 bg-indigo-50 rounded-2xl p-6 flex flex-col justify-center border border-indigo-100 hover:bg-indigo-100 transition-colors">
            <p className="font-bold text-indigo-900 text-xl">Mathematics</p>
            <p className="text-sm text-indigo-700 mt-2">Download Chapter 4 PDF</p>
          </div>
        </div>

      </div>
    </div>
  );
}
