import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReceiptReviewOverlay } from './ReceiptReviewOverlay';
import type { ReceiptFile } from './ReceiptReviewOverlay';

const meta = {
  title: 'Expenses module/Receipt Review Overlay',
  component: ReceiptReviewOverlay,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof ReceiptReviewOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFiles: ReceiptFile[] = [
  { id: '1', filename: 'taxi_receipt_oct12.jpg', size: '1.2 MB' },
  { id: '2', filename: 'hotel_invoice_oct13.pdf', size: '2.4 MB' },
  { id: '3', filename: 'dinner_receipt_oct14.jpg', size: '890 KB' },
  { id: '4', filename: 'flight_boarding_oct11.png', size: '1.8 MB' },
];

export const Default: Story = {
  name: 'Default (4 receipts)',
  args: {
    files: sampleFiles,
    onClose: () => console.log('close'),
    onUploadMore: () => console.log('upload more'),
    onScan: () => console.log('initiate scan'),
    onReupload: (id, file) => console.log('reupload', id, file.name),
    onRemove: (id) => console.log('remove', id),
  },
};

export const SingleReceipt: Story = {
  name: 'Single Receipt',
  args: {
    files: [sampleFiles[0]],
    onClose: () => console.log('close'),
    onScan: () => console.log('initiate scan'),
  },
};

export const Empty: Story = {
  name: 'Empty (no receipts)',
  args: {
    files: [],
    onClose: () => console.log('close'),
    onScan: () => console.log('initiate scan'),
  },
};

export const WithImages: Story = {
  name: 'With Image Previews',
  args: {
    files: [
      {
        id: '1',
        filename: 'taxi_receipt_oct12.jpg',
        size: '1.2 MB',
        previewUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&h=600&fit=crop',
      },
      {
        id: '2',
        filename: 'hotel_invoice_oct13.jpg',
        size: '2.4 MB',
        previewUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=600&fit=crop',
      },
    ],
    onClose: () => console.log('close'),
    onScan: () => console.log('initiate scan'),
  },
};
