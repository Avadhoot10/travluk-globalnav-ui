export class TopMenu{ 
  navItemType!: string;
  name!: string;
  layoutType?: string;
  totalCols?: number;
  subChild?: [
    {
      name: string;
      type: string;
      imageUrl: string,
      menu: [
        {
          name: string;
          link: string;
        }
      ]
    }
  ]
}