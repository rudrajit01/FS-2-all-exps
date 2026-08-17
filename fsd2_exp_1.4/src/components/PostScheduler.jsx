import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { updatePost, addPost, deletePost } from '../store/postsSlice';
import './PostScheduler.css';

const PostScheduler = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  // রেডক্সের পোস্টগুলোকে FullCalendar-এর ইভেন্ট ফরম্যাটে রূপান্তর
  const events = posts.map((post) => ({
    id: post.id,
    title: post.title,
    start: `${post.date}T${post.time}:00`,
    allDay: false,
  }));

  // ড্র্যাগ করে ফেললে (ডেট/টাইম আপডেট)
  const handleEventDrop = (info) => {
    const { event } = info;
    const newDate = event.startStr.split('T')[0];
    const newTime = event.startStr.split('T')[1]?.slice(0, 5);
    dispatch(updatePost({ id: event.id, updates: { date: newDate, time: newTime } }));
  };

  // রিসাইজ করলে (সময়ের দৈর্ঘ্য বাড়ালে)
  const handleEventResize = (info) => {
    const { event } = info;
    const newDate = event.startStr.split('T')[0];
    const newTime = event.startStr.split('T')[1]?.slice(0, 5);
    dispatch(updatePost({ id: event.id, updates: { date: newDate, time: newTime } }));
  };

  // ইভেন্টে ক্লিক করলে (ভিউ/এডিট/ডিলিট)
  const handleEventClick = (info) => {
    const post = posts.find((p) => p.id === info.event.id);
    if (post) {
      const action = window.confirm(
        `📝 পোস্ট: ${post.title}\n📅 তারিখ: ${post.date}\n⏰ সময়: ${post.time}\n\n"OK" চাপলে ডিলিট হবে, "Cancel" চাপলে দেখুন।`
      );
      if (action) {
        dispatch(deletePost(post.id));
        alert('🗑️ পোস্ট ডিলিট করা হয়েছে!');
      }
    }
  };

  // ডেমো পোস্ট অ্যাড করার বাটন
  const handleAddPost = () => {
    const newPost = {
      id: Date.now().toString(),
      title: `New Post ${posts.length + 1}`,
      date: '2026-08-19',
      time: '12:00',
    };
    dispatch(addPost(newPost));
  };

  return (
    <div className="scheduler-container">
      <div className="scheduler-header">
        <h2>📅 Post Scheduler (FullCalendar)</h2>
        <button onClick={handleAddPost} className="add-btn">➕ Add Demo Post</button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        editable={true}        // ড্র্যাগ-ড্রপ ও রিসাইজ অন
        droppable={true}
        events={events}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        eventClick={handleEventClick}
        height="auto"
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
      />
    </div>
  );
};

export default PostScheduler;