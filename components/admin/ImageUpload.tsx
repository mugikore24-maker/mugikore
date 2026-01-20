"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export default function ImageUpload({
  value,
  onChange,
  disabled = false,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    setError("");
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed");
      }

      const data = await response.json();
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleRemove = async () => {
    if (!value) return;

    try {
      await fetch(`/api/admin/upload?url=${encodeURIComponent(value)}`, {
        method: "DELETE",
      });
      onChange("");
    } catch (err) {
      console.error("Failed to delete image:", err);
      // Still clear the value even if delete fails
      onChange("");
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleInputChange}
        className="hidden"
        disabled={disabled || uploading}
      />

      {value ? (
        <div className="relative">
          <div className="relative w-full h-48 rounded-lg overflow-hidden border border-brown-300">
            <Image
              src={value}
              alt="Hero image preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={handleClick}
              disabled={disabled || uploading}
              className="flex-1 px-3 py-2 text-sm border border-brown-300 text-brown-700 hover:bg-beige-50 disabled:opacity-50"
            >
              Change Image
            </button>
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled || uploading}
              className="px-3 py-2 text-sm border border-red-300 text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            w-full h-48 border-2 border-dashed rounded-lg
            flex flex-col items-center justify-center cursor-pointer
            transition-colors
            ${dragOver ? "border-brown-500 bg-beige-100" : "border-brown-300 hover:border-brown-400 hover:bg-beige-50"}
            ${disabled || uploading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {uploading ? (
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-brown-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-sm text-brown-600">Uploading...</p>
            </div>
          ) : (
            <div className="text-center">
              <svg
                className="w-10 h-10 text-brown-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-brown-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-brown-500">
                JPEG, PNG, WebP, GIF (max 4MB)
              </p>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Manual URL input as fallback */}
      <div className="pt-2 border-t border-brown-200">
        <label className="block text-xs text-brown-600 mb-1">
          Or enter image URL manually:
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/image.jpg or /images/local.jpg"
          className="w-full px-3 py-2 text-sm border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
          disabled={disabled || uploading}
        />
      </div>
    </div>
  );
}
