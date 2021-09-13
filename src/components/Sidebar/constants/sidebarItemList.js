import { sidebarIcons } from './icons';

export default [
  {
    'iconName': sidebarIcons.dashboard,
    'path': '/dashboard',
    'title': 'Dashboard',
  },
  {
    'iconName': sidebarIcons.tubes,
    'path': '/monitored',
    'title': 'Monitored',
    'children': [
      {
        'title': 'Add New Channel',
        'path': '/monitored/add/channel',
      },
      {
        'title': 'Add New Playlist',
        'path': '/monitored/add/playlist',
      }
    ]
  },
  {
    'iconName': sidebarIcons.queue,
    'title': 'Queue',
    'path': '/queue',
    'children': [
      {
        'title': 'Active',
        'path': '/queue/active',
      },
      {
        'title': 'Completed',
        'path': '/queue/completed',
      }
    ]
  },
  {
    'iconName': sidebarIcons.settings,
    'title': 'Settings',
    'path': '/settings'
  }
]