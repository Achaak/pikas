import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { DropzoneOptions, FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import { IconByName } from '@pikas-ui/icons';
import { fromEvent } from 'file-selector';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 200ms ease-in-out',
  rowGap: 8,
  width: '100%',

  variants: {
    isDisabled: {
      true: {
        opacity: 0.5,
        color: '$black-light',
        pointerEvents: 'none',
      },
    },
  },
});

const DropzoneStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  border: '2px dashed $gray',
  borderRadius: '$sm',
  backgroundColor: '$white',
  color: '$black',
  transition: 'all 0.2s ease-in-out',
  padding: 16,

  variants: {
    isFocused: {
      true: {
        backgroundColor: '$primary-lighter',
      },
    },
  },
});

const FilesResult = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

const AcceptedFiles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const RejectedFiles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const FileList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
  marginTop: 8,
});

const FileListContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  fontSize: '$em-small',
});

const FileListName = styled('span', {
  marginLeft: 4,
  fontSize: '$em-base',
  lineHeight: '$em-base',
  color: '$black',
});

const FileListSize = styled('span', {
  marginLeft: 4,
  fontSize: '$em-x-small',
  color: '$black',
});

const FileListItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  color: '$black',
});

const ErrorList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 8,
});

const ErrorListItem = styled('li', {
  display: 'flex',
  color: '$danger',
  fontSize: '$em-x-small',
});

const FilesTitle = styled('span', {
  fontSize: '$em-small',
  fontWeight: '$bold',
  color: '$black',
});

const AcceptedFilesTitle = styled(FilesTitle, {});

const RejectedFilesTitle = styled(FilesTitle, {});

const Description = styled('span', {
  fontSize: '$em-base',
  color: '$black-light',
  transition: 'all 200ms ease-in-out',

  variants: {
    isFocused: {
      true: {
        color: '$primary',
      },
    },
  },
});

const SubDescription = styled('span', {
  fontSize: '$em-small',
  fontStyle: 'italic',
  transition: 'all 200ms ease-in-out',
  color: '$black-light',

  variants: {
    isFocused: {
      true: {
        color: '$primary',
      },
    },
  },
});

export type {
  Accept,
  DropEvent,
  DropzoneInputProps,
  DropzoneOptions,
  DropzoneRef,
  DropzoneRootProps,
  DropzoneState,
  ErrorCode,
  FileError,
  FileRejection,
  FileWithPath,
} from 'react-dropzone';

export type DropzoneCSS = {
  container?: PikasCSS;
  dropzone?: PikasCSS;
  description?: PikasCSS;
  subDescription?: PikasCSS;
};

export type DropzoneProps = DropzoneOptions & {
  height?: number | string;
  width?: number | string;
  description?: string;
  subDescription?: string;
  css?: DropzoneCSS;
  showFilesResult?: boolean;
  renderResult?: ({
    acceptedFiles,
    fileRejections,
  }: {
    acceptedFiles: File[];
    fileRejections: FileRejection[];
  }) => ReactNode;
};

export const Dropzone: FC<DropzoneProps> = ({
  maxFiles = 0,
  accept,
  maxSize = Infinity,
  minSize = 0,
  disabled = false,
  multiple = true,
  height = 200,
  width = '100%',
  noClick = false,
  noKeyboard = false,
  autoFocus = false,
  description,
  subDescription,
  getFilesFromEvent = fromEvent,
  noDragEventsBubbling = false,
  onDrop,
  onDropAccepted,
  onDropRejected,
  onDragEnter,
  onDragLeave,
  onDragOver,
  noDrag = false,
  onError,
  onFileDialogCancel,
  onFileDialogOpen,
  preventDropOnDocument = true,
  useFsAccessApi = true,
  validator,
  showFilesResult = true,
  renderResult,
  css,
}) => {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxFiles,
    accept,
    maxSize,
    minSize,
    disabled,
    multiple,
    noClick,
    noKeyboard,
    autoFocus,
    getFilesFromEvent,
    noDragEventsBubbling,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onDragEnter,
    onDragLeave,
    onDragOver,
    noDrag,
    onError,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    validator,
  });

  const acceptedFileItems = acceptedFiles.map((file, index) => (
    <FileListItem key={index}>
      <FileListContent>
        <IconByName name="bx:check" colorName="success" size="1.2em" />
        <FileListName>{file.name}</FileListName>
        <FileListSize>({humanFileSize(file.size)})</FileListSize>
      </FileListContent>
    </FileListItem>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }, index) => (
    <FileListItem key={index}>
      <FileListContent>
        <IconByName name="bx:error" colorName="danger" size="1.2em" />
        <FileListName>{file.name}</FileListName>
        <FileListSize>({humanFileSize(file.size)})</FileListSize>
      </FileListContent>
      <ErrorList>
        {errors.map((e) => (
          <ErrorListItem key={e.code}>{e.message}</ErrorListItem>
        ))}
      </ErrorList>
    </FileListItem>
  ));

  const getCustomSubDescription = () => {
    if (maxFiles === 0) {
      return '(You can upload any number of files)';
    }

    if (maxFiles === 1) {
      return '(You can upload only one file)';
    }

    return `(${maxFiles} ${
      maxFiles > 1 ? 'files' : 'file'
    } is the maximum number of files you can drop here)`;
  };

  return (
    <Container isDisabled={disabled} css={css?.container}>
      <DropzoneStyled
        {...getRootProps({ className: 'dropzone' })}
        isFocused={isDragActive}
        css={{
          width,
          height,
          cursor: noClick ? 'default' : 'pointer',
          ...css?.dropzone,
        }}
      >
        <input {...getInputProps()} />
        <Description isFocused={isDragActive} css={css?.description}>
          {description ??
            "Drag 'n' drop some files here, or click to select files"}
        </Description>
        <SubDescription isFocused={isDragActive} css={css?.subDescription}>
          {subDescription ?? getCustomSubDescription()}
        </SubDescription>
      </DropzoneStyled>
      {(acceptedFiles.length > 0 || fileRejections.length > 0) &&
      showFilesResult
        ? renderResult?.({
            acceptedFiles,
            fileRejections,
          }) ?? (
            <FilesResult>
              {acceptedFiles.length > 0 && (
                <AcceptedFiles>
                  <AcceptedFilesTitle>Accepted files</AcceptedFilesTitle>
                  <FileList>{acceptedFileItems}</FileList>
                </AcceptedFiles>
              )}

              {fileRejections.length > 0 && (
                <RejectedFiles>
                  <RejectedFilesTitle>Rejected files</RejectedFilesTitle>
                  <FileList>{fileRejectionItems}</FileList>
                </RejectedFiles>
              )}
            </FilesResult>
          )
        : null}
    </Container>
  );
};

const humanFileSize = (bytes: number, si = false, dp = 1): string => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return `${bytes.toFixed(dp)} ${units[u]}`;
};
