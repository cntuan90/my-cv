import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CertificateImage, ProfileType } from '../../../../data/profile';
import CertificateImagePopup from './certificateImage.popup';

const useStyles = makeStyles(() => ({
  root: {
    padding: 30,
  },
}));

const defaultImagePopupData = { open: false, images: [] as CertificateImage[] };

interface Props {
  profile: ProfileType;
}

const Certificate: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [imagePopupData, setImagePopupData] = React.useState(defaultImagePopupData);

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h2" display="block" gutterBottom>
        <strong>CERTIFICATES</strong>
      </Typography>

      <ul>
        {/* {props.profile.certificates.map((certificate, index) => (
          <li key={index}>
            {certificate.isPopup ? (
              <Link onClick={() => setImagePopupData({ open: true, images: certificate.images })}>
                <Typography variant="h6">
                  {certificate.name}
                  {certificate.images && ` [${certificate.images.length}]`}
                </Typography>
              </Link>
            ) : (
              <Link href={certificate.link} target="_blank">
                <Typography variant="h6">
                  {certificate.name}
                  {certificate.images && ` [${certificate.images.length}]`}
                </Typography>
              </Link>
            )}
          </li>
        ))} */}
      </ul>

      <CertificateImagePopup
        open={imagePopupData.open}
        images={imagePopupData.images}
        closeHandlerCallBack={() => setImagePopupData(defaultImagePopupData)}
      />
    </Box>
  );
};

export default Certificate;
