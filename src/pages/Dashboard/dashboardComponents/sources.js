import React from "react";
import WebIcon from "@material-ui/icons/Web";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import GavelIcon from "@material-ui/icons/Gavel";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import LanguageIcon from "@material-ui/icons/Language";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventNoteIcon from "@material-ui/icons/EventNote";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export const primarySources = [
  {
    id: 0,
    href: "/primary/legislation",
    icon: <GavelIcon />,
    name: "Legislation",
  },
  {
    id: 1,
    href: "/primary/cases/reported",
    icon: <EventAvailableIcon />,
    name: "Reported judgment",
  },
  {
    id: 2,
    href: "/primary/cases/unreported",
    icon: <EventNoteIcon />,
    name: ` 
    Unreported judgment
    Medium neutral citation`,
  },
];

export const secondarySources = [
  {
    id: 3,
    href: "/secondary/book",
    icon: <MenuBookIcon />,
    name: "Book",
  },
  {
    id: 4,
    href: "/secondary/journal-article",
    icon: <LibraryBooksIcon />,
    name: "Journal Articles",
  },
  {
    id: 5,
    href: "/secondary/legal-encyclopedia",
    icon: <LanguageIcon />,
    name: "Legal Encyclopedia",
  },
  {
    id: 6,
    href: "/secondary/looseleaf-service",
    icon: <CollectionsBookmarkIcon />,
    name: "Looseleaf Service",
  },
  {
    id: 7,
    href: "/secondary/website",
    icon: <WebIcon />,
    name: "Internet material / website",
  },
];
