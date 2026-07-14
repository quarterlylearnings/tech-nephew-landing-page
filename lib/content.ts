// All site copy lives here. Edit this file to change text — no JSX/HTML editing required.

export const site = {
  name: "Tech Nephew",
  title: "Tech Nephew — patient, one-on-one tech help",
  description:
    "Tech Nephew is a one-on-one video call service that helps you solve real technology problems, at your pace, without the jargon.",
};

export const bookingUrl = "/success";

export const hero = {
  heading: [
    "You're not behind. You just haven't had",
    { emphasis: "the right person" },
    "explain it yet.",
  ],
  sub: "Tech Nephew is a one-on-one video call service that helps you solve real technology problems — at your pace, without the jargon.",
  cta: { label: "Book a free session →", href: bookingUrl },
  micro: "Fifteen minutes · No credit card · No sales pitch after",
  trust: "I'll never ask for a password, and we never install anything on your device.",
};

export const empathy = {
  body: "Technology moved fast. Nobody sat you down and walked you through any of it. So if you feel a step behind, that's not on you — ",
  emphasis:
    "that's just what happens when the world keeps shipping updates and forgets to send instructions.",
};

export const service = {
  heading: "What happens on a call",
  body: "We get on a video call. Show me what's not working — share your screen, or just hold your phone up to the camera. No script, no rushing. When we hang up, the thing works, and you know why.",
  pills: ["Patient", "1-on-1", "By video"],
  medallion: ["One", "call."],
};

export const problems = [
  { num: "01", quote: "I can't get the photos off my phone.", who: "Janet, 67" },
  { num: "02", quote: "I keep getting locked out of my email.", who: "Ron, 71" },
  { num: "03", quote: "I don't know if I should click “update” or not.", who: "Margaret, 64" },
  { num: "04", quote: "My grandkids set it up and now I can't change a thing.", who: "Dale, 73" },
  { num: "05", quote: "Everyone tells me to just Google it. That doesn't help.", who: "Pat, 69" },
  { num: "06", quote: "I'm afraid I'll push the wrong button and break something.", who: "Linda, 70" },
];

export const bio = {
  heading: "Hi, I'm your Tech Nephew.",
  byline: "— Brandon Campbell-Kearns",
  photoPath: "/ql-headshot.png",
  body: "Tech Nephew started where most family tech help starts: with my mom asking why her home assistant was offline at 9pm. Then my aunt. Then her friend. After a few years of these calls, I realized the people I love most weren't getting stuck on hard problems — they were getting stuck because nobody had ever sat with them long enough to explain. So I made the sitting-with-people part the job. I'll meet you exactly where you are. I won't talk over your head, and I won't talk down to you.",
};

export const steps = [
  {
    num: "01",
    title: "Book a free session",
    body: "Pick a time on the calendar. Fifteen minutes, no card, no catch.",
  },
  {
    num: "02",
    title: "We meet on a video call",
    body: "You show me the problem. Share your screen, or just hold up your phone. We work through it together.",
  },
  {
    num: "03",
    title: "You leave knowing what to do",
    body: "I'll send a written summary in plain language so next time it comes up, you'll have it.",
  },
];

export const testimonials = [
  {
    name: "Barbara",
    meta: "68 · retired teacher",
    quote:
      "I finally feel like I understand my phone. He walked me through it without making me feel rushed or silly. I actually look forward to our sessions.",
    italic: false,
  },
  {
    name: "Frank",
    meta: "71 · grandfather of six",
    quote:
      "I called him about one thing and we ended up fixing four. He never once said “just” or “simply” — that means a lot when you're the one asking.",
    italic: true,
  },
];

export const emailSignup = {
  heading: "Want a head start before we talk?",
  sub: "I'll send one plain-language tip every so often — the kind of thing that saves you a call. No selling, no spam, unsubscribe whenever.",
  placeholder: "your@email.com",
  submitLabel: "Keep Me Posted",
};

export const footer = {
  tag: ["You've", { emphasis: "Done" }, "Enough."],
  familyNote: "Booking for a parent? They can book directly — no account needed.",
  links: {
    podcast: {
      label: "Quarterly Learnings",
      href: "https://podcasts.apple.com/us/podcast/quarterly-learnings/id1657022269",
    },
    contact: {
      label: "Questions",
      href: "mailto:technephew@quarterlylearnings.com",
    },
  },
  copyright: "© 2026 Tech Nephew · Quarterly Learnings",
};

export const success = {
  tagline: "You're officially on your way to tech support freedom.",
  title: "You're in!",
  subtitle: "Welcome to the family tech support program",
  steps: [
    {
      title: "I'll email you updates",
      body: "As I test this out with my own family, you'll get behind-the-scenes updates and know when I'm ready to help yours",
    },
    {
      title: "Watch for family session videos",
      body: "I'm recording real sessions with my relatives—expect some entertaining content that shows exactly how this works",
    },
    {
      title: "Early access when we launch",
      body: "You'll be first to know when Tech Nephew is ready to officially take over your family's tech support needs",
    },
  ],
  instagram: {
    heading: "Follow the journey",
    body: "Want to watch Tech Nephew come to life? I'm documenting as much as I can of tech support sessions, funny moments, and all the behind-the-scenes of distributing Tech Nephew.",
    handle: "@asktechnephew",
    href: "https://instagram.com/asktechnephew",
  },
  backLink: { label: "← Back to Tech Nephew", href: "/" },
};
