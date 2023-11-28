import { Formik, Form } from 'formik';
import { Button, Grid, MenuItem, Typography } from '@mui/material';
import { createOrganizationSchema } from '@/models/yup/organization';
import { useOrganizationForm } from '../../../../hooks/useOrganizationForm';
import { SelectInput, TextInput } from '@/components';

export const OrganizationForm = () => {
	const { initFormOrganization } = useOrganizationForm();

	const createOrganization = async () => {};

	return (
		<Formik
			initialValues={initFormOrganization}
			onSubmit={createOrganization}
			validationSchema={createOrganizationSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur }) => (
				<></>
				// <Form style={{ width: '100%' }}>
				//   <Grid  container spacing={3} mb={4}>
				//     <Grid item xs={12} sm={6}>
				//       <TextInput
				//         type="text"
				//         label="Nombre de tu negocio"
				//         name="name"
				//         value={values.name}
				//         onChange={handleChange}
				//         onBlur={handleBlur}
				//         error={touched.name && Boolean(errors.name)}
				//         helperText={
				//           touched.name && errors.name
				//         }
				//         fullWidth
				//       />
				//     </Grid>
				//     <Grid item xs={12} sm={6}>
				//       <SelectInput
				//         label="Sector"
				//         name="sub_sector"
				//         value={values.sub_sector}
				//         onChange={handleChange}
				//         onBlur={handleBlur}
				//         error={touched.sub_sector && Boolean(errors.sub_sector)}
				//         defaultValue={0}
				//         helpertext={errors.sub_sector}
				//       >
				//         {
				//           sectors &&
				//           sectors.map((item, index) => (
				//             <>
				//               <MenuItem disabled value="" key={index}
				//                 sx={{
				//                   opacity: '1 !important'
				//                 }}
				//               >
				//                 <Typography component='span' textTransform='uppercase' fontWeight={600} color='primary'>
				//                   { item.name }
				//                 </Typography>
				//               </MenuItem>
				//               {
				//                 item.sub_sectors.map(sector => (
				//                   <MenuItem key={sector.pk} value={sector.pk}>{ sector.name }</MenuItem>
				//                 ))
				//               }
				//             </>
				//           ))
				//         }
				//       </SelectInput>
				//     </Grid>
				//     <Grid item xs={12} sm={6}>
				//       <SelectInput
				//         label="Pais"
				//         name="country"
				//         value={values.country}
				//         onChange={handleChange}
				//         onBlur={handleBlur}
				//         error={touched.country && Boolean(errors.country)}
				//         defaultValue={0}
				//         helpertext={errors.country}
				//       >
				//         {
				//           countries &&
				//           countries.map(item => (
				//             <MenuItem key={item.id} value={item.id}>{ item.name }</MenuItem>
				//           ))
				//         }
				//       </SelectInput>
				//     </Grid>
				//     <Grid item xs={12} sm={6}>
				//       <SelectInput
				//         label="¿Cómo nos encontraste?"
				//         name="how_you_know_us"
				//         value={values.how_you_know_us}
				//         onChange={handleChange}
				//         onBlur={handleBlur}
				//         error={touched.how_you_know_us && Boolean(errors.how_you_know_us)}
				//         defaultValue={0}
				//         helpertext={errors.how_you_know_us}
				//       >
				//         <MenuItem value={'Facebook'}>Facebook</MenuItem>
				//         <MenuItem value={'Instagram'}>Instagram</MenuItem>
				//       </SelectInput>
				//     </Grid>
				//   </Grid>
				//   <Grid display='flex' direction="row" justifyContent='flex-end' width={'100%'}>
				//     <Button type="submit" variant="contained" size='medium'>
				//       Siguiente
				//     </Button>
				//   </Grid>
				// </Form>
			)}
		</Formik>
	);
};
