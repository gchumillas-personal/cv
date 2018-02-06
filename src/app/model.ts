export interface SectionModel {
  description: string;
  title?: string;
  tags?: TagModel[];
  snapshots?: SnapshotModel[];
}

export interface TagModel {
  label: string;
  text: string;
  link?: string;
  isExternalLink?: boolean;
  icon?: string;
  isIconVisible?: boolean;
}

export interface SnapshotModel {
  src: string;
  caption: string;
}
