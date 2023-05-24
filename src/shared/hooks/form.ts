import { useEffect, useCallback, useState } from 'react';
import { useFormik, FormikConfig, FormikValues } from 'formik';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { usePrevious } from 'react-use';

export const useFormikAutoSave = <TValues extends FormikValues>(
  params: FormikConfig<TValues>,
  debounceMs: number
) => {
  const formik = useFormik<TValues>(params);
  const [lastUpdated, setLastUpdated] = useState<Nullable<Date>>(null);

  const prevFormikValues = usePrevious<TValues>(formik.values);

  const debouncedSubmit = useCallback(
    debounce(
      () =>
        formik.validateForm().then((errors) => {
          if (isEmpty(errors)) {
            return formik.submitForm().then(() => {
              setLastUpdated(new Date());
            });
          }
        }),
      debounceMs
    ),
    [debounceMs]
  );

  useEffect(() => {
    if (prevFormikValues && !isEqual(formik.values, prevFormikValues)) {
      debouncedSubmit();
    }
  }, [formik.values, prevFormikValues, params]);

  return { formik, lastUpdated };
};
