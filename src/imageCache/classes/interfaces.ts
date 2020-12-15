type voi = {
  windowWidth: number;
  windowCenter: number;
};

export type Metadata = {
  BitsAllocated: number;
  BitsStored: number;
  SamplesPerPixel: number;
  HighBit: number;
  PhotometricInterpretation: string;
  PixelRepresentation: number;
  Modality: string;
  ImageOrientationPatient: Array<number>;
  PixelSpacing: Array<number>;
  FrameOfReferenceUID: string;
  Columns: number;
  Rows: number;
  voiLut: Array<voi>;
};

export interface ImageVolumeInterface {
  uid: string;
  metadata: Metadata;
  dimensions: Array<number>;
  spacing: Array<number>;
  origin: Array<number>;
  direction: Array<number>;
  vtkImageData: object;
  scaling?: any;
  scalarData: Float32Array | Uint8Array;
}

export interface StreamingInterface {
  imageIds: Array<string>;
  loadStatus: {
    loaded: Boolean;
    loading: Boolean;
    cachedFrames: Array<Boolean>;
    callbacks: Array<Function>;
  };
}