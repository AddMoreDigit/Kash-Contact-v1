import { useState } from 'react';
import { Search, MoreVertical, Smile, Send } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders';

interface MessageChatPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-[#8363f2] text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="text-[14px]">{label}</span>
    </button>
  );
}

const conversations = [
  {
    id: 1,
    name: 'Stanley Moloto',
    lastMessage: 'Got it, I will check',
    time: '08/30 AM',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    active: true,
  },
  {
    id: 2,
    name: 'Bornwise Baloyi',
    lastMessage: 'Got it, I will check',
    time: '08/30 AM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    active: false,
  },
  {
    id: 3,
    name: 'Kinelwe Nkosi',
    lastMessage: 'Great see you soon',
    time: '08/30 AM',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    active: false,
  },
  {
    id: 4,
    name: 'Nsovo Shilowa',
    lastMessage: 'Yes I will be there',
    time: '08/32 AM',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    active: false,
  },
  {
    id: 5,
    name: 'Mercy Hope',
    lastMessage: 'Got it, I will check',
    time: '08/30 AM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    active: false,
  },
  {
    id: 6,
    name: 'Liz Nkosana',
    lastMessage: 'Let\'s meet today',
    time: '08/30 AM',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
    active: false,
  },
  {
    id: 7,
    name: 'Cape town gateway',
    lastMessage: 'I have send the Detials',
    time: '',
    avatar: '',
    isGroup: true,
    active: false,
  },
];

const messages = [
  {
    id: 1,
    text: 'Have you received the Booking Request?',
    time: '09/30 AM',
    sender: 'other',
  },
  {
    id: 2,
    text: 'Yes, I have',
    time: '09/30 AM',
    sender: 'me',
  },
  {
    id: 3,
    text: 'Great ,Are you Available on the Specified Date',
    time: '09/30 AM',
    sender: 'other',
  },
  {
    id: 4,
    text: 'Yes ,the dates Work for us',
    time: '3H:53 PM',
    sender: 'me',
  },
];

export function MessageChatPage({ onNavigate, onLogout }: MessageChatPageProps) {
  const [messageInput, setMessageInput] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle send message
      setMessageInput('');
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <UserSidebar activePage="messaging" onNavigate={onNavigate} onLogout={onLogout} />

      {/* Conversations List */}
      <div className="w-[320px] bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search user/campaigns"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8363f2] focus:border-transparent text-[14px]"
            />
          </div>
          <h2 className="text-[18px]">Message Chat</h2>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`w-full flex items-center gap-3 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                conversation.active ? 'bg-purple-50' : ''
              }`}
            >
              {conversation.isGroup ? (
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8363f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              ) : (
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-[14px] truncate">{conversation.name}</h3>
                <p className="text-[12px] text-gray-500 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.time && (
                <span className="text-[10px] text-gray-400 flex-shrink-0">{conversation.time}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {selectedConversation.isGroup ? (
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#8363f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            ) : (
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-[16px]">{selectedConversation.name}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.sender === 'me' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-lg ${
                    message.sender === 'me'
                      ? 'bg-[#8363f2] text-white rounded-br-none'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-[14px]">{message.text}</p>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 px-1">{message.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8363f2] focus:border-transparent text-[14px]"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <Send className="w-5 h-5 text-[#8363f2]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}