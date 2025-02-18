import PropTypes from "prop-types";
import { textShorter } from "../helpers";

const CertificationCard = ({
  certificationImgSrc,
  certificationName,
  certificationCompany,
  certificationUrl,
}) => {
  const shortTitle = textShorter(certificationName);
  return (
    <div className="bg-zinc-800 p-4 rounded-xl min-w-[320px] flex flex-col gap-4 lg:min-w-[420px] hover:bg-zinc-700/50">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg">
            <img
              src={certificationImgSrc}
              alt={certificationName}
              loading="lazy"
              className="img-cover bg-white p-1"
            />
          </figure>

          <div>
            <p>{shortTitle}</p>
            <p className="text-xs text-zinc-400 tracking-wider">
              {certificationCompany}
            </p>
          </div>
        </div>
        <a
          href={certificationUrl}
          target="_blank"
          className="cert-navigate material-symbols-rounded hover:text-violet-400"
          aria-hidden="true"
        >
          arrow_outward
        </a>
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  certificationDescription: PropTypes.string.isRequired,
  certificationImgSrc: PropTypes.string.isRequired,
  certificationName: PropTypes.string.isRequired,
  certificationCompany: PropTypes.string.isRequired,
  certificationUrl: PropTypes.string.isRequired,
};

export default CertificationCard;
