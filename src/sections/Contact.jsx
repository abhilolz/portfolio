import { mySocials } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center gap-3 py-12 text-center c-space"
    >
      <h2 className="text-heading">Let’s Connect</h2>

      <p className="text-neutral-400 max-w-lg text-sm">
        Always open to new opportunities or a quick chat!
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mt-4">
        {mySocials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition rounded-full bg-white/5 hover:bg-white/10"
          >
            <img src={social.icon} alt={social.name} className="w-7 h-7" />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-xs text-neutral-600">
        © {new Date().getFullYear()} Abhiram Durbha
      </p>
    </section>
  );
};

export default Contact;
