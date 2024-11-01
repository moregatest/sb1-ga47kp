import { Mapping } from '../types/mapping';

export const generalMappings: Mapping[] = [
  { windows: 'Ctrl', mac: '⌘ Command' },
  { windows: 'Alt', mac: '⌥ Option' },
  { windows: 'Windows', mac: '⌘ Command' },
  { windows: 'Backspace', mac: 'Delete' },
  { windows: 'Delete', mac: 'Fn + Delete' },
  { windows: 'Home', mac: 'Fn + ←' },
  { windows: 'End', mac: 'Fn + →' },
  { windows: 'Page Up', mac: 'Fn + ↑' },
  { windows: 'Page Down', mac: 'Fn + ↓' },
  { windows: 'Print Screen', mac: '⌘ + Shift + 3 (全螢幕)\n⌘ + Shift + 4 (區域)' },
  { windows: 'Ctrl + Alt + Delete', mac: '⌘ + Option + Esc' },
  { windows: 'Ctrl + C', mac: '⌘ + C' },
  { windows: 'Ctrl + V', mac: '⌘ + V' },
  { windows: 'Ctrl + X', mac: '⌘ + X' },
  { windows: 'Ctrl + Z', mac: '⌘ + Z' },
  { windows: 'Ctrl + A', mac: '⌘ + A' },
  { windows: 'Alt + Tab', mac: '⌘ + Tab' },
];

export const inputMethodMappings: Mapping[] = [
  { windows: 'Caps Lock', mac: 'Caps Lock (切換中英文)' },
  { windows: 'Shift', mac: '按住 Shift (暫時切換到英文)' },
  { windows: 'Ctrl + Space', mac: '⌘ + Space (切換輸入法)' },
];