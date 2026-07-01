"use client";

import { GlobalUserAvatar } from "@/components/molecules/GlobalUserAvatar";
import { Loader2, Pencil } from "lucide-react"; // CameraからPencilに変更
import type * as React from "react";
import { useRef, useState } from "react";

type EditableAvatarProps = {
  name: string;
  avatarUrl: string;
  isEditable: boolean;
  onSave: (file: File) => Promise<void>;
  className?: string;
};

export function EditableAvatar({
  name,
  avatarUrl,
  isEditable,
  onSave,
  className = "",
}: EditableAvatarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleClick = () => {
    if (!isEditable || isUploading) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // ... （ここは以前のコードと同じです）
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setIsUploading(true);
    try {
      await onSave(file);
      setPreviewUrl(null);
    } catch (error) {
      console.error("画像の保存に失敗しました", error);
      setPreviewUrl(null);
    } finally {
      URL.revokeObjectURL(objectUrl);
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const displayUrl = previewUrl || avatarUrl;

  return (
    // 強制的に正方形（真円）を維持する
    <div className={`relative group shrink-0 aspect-square ${className}`}>
      {/* アバター本体 */}
      <div
        onClick={handleClick}
        className={`relative rounded-full w-full h-full overflow-hidden ${
          isEditable && !isUploading ? "cursor-pointer" : ""
        }`}
      >
        <GlobalUserAvatar
          name={name}
          iconUrl={displayUrl}
          className="w-full h-full text-2xl"
        />

        {/* アップロード中のローディングオーバーレイ */}
        {isUploading && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Loader2 className="text-white w-8 h-8 animate-spin" />
          </div>
        )}
      </div>

      {/* 右下の鉛筆バッジを常時表示 */}
      {isEditable && !isUploading && (
        <button
          type="button"
          onClick={handleClick}
          className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm text-slate-400 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
          aria-label="アイコンを編集する"
        >
          <Pencil className="w-3.5 h-3.5" />
        </button>
      )}

      {/* 隠しファイル入力 */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
      />
    </div>
  );
}
