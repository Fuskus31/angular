export class FaceSnap {
  location?:string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

  onAddSnap() {
    this.snaps++;
  }

  setLocation(location: string) :void{
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

}
