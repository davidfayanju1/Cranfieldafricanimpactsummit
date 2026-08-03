// PitchCompetition.tsx
import DefaultLayout from "../layout/DefaultLayout";
import { CheckCircle, ExternalLink, Calendar } from "lucide-react";

const APPLICATION_FORM_URL = "https://forms.gle/XMUQJhW8MiZTyojd9";

const flyers = [
  {
    src: "/images/partnership-promotional-content/innopower-1.jpeg",
    alt: "InnoPower x Cranfield Founder Pathway - Are you a student or recent graduate with a bold idea?",
  },
  {
    src: "/images/partnership-promotional-content/innopower-2.jpeg",
    alt: "InnoPower x Cranfield Founder Pathway - Helping African university talent transform innovative ideas into scalable businesses",
  },
];

const PitchCompetition = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/summit-images/summit-cover.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
        </div>

        <div className="relative pt-34 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Applications Open
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pitch <span className="text-emerald-300">Competition</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                The InnoPower &times; Cranfield Founder Pathway is here for
                students and recent graduates with a bold idea.
              </p>
              <div className="flex justify-center items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>28th July, 2026 &ndash; 17th August, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Are you a student or recent graduate with a bold idea?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The InnoPower &times; Cranfield Founder Pathway is helping
            African university talent transform innovative ideas into
            scalable businesses. Full details, eligibility, and submission
            requirements are on the application form.
          </p>
        </div>

        {/* Flyers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {flyers.map((flyer) => (
            <div
              key={flyer.src}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img
                src={flyer.src}
                alt={flyer.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Apply CTA */}
        <div className="max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
          <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to apply?
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the application form to register your interest.
          </p>
          <a
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PitchCompetition;
