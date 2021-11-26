# Styling

- [TailwindCSS](#tailwindCSS)
- [Skeleton](#skeleton)
- [Progress bar](#progressBar)
- [Icons](#icons)

## TailwindCSS<a name=tailwindCSS></a>

For styling Dots. website we used [TailwindCSS](https://tailwindcss.com/). It's a a utility first CSS framework using classNames directly in the HTML.

### Documentation

Documentation on TailwindCSS could be find [here](https://tailwindcss.com/docs)

### Example of how it's been used:

If we take the following example:

```
 <div className="font-bold text-left mb-2">
  {organisation.name}
  </div>
```

The styling is what is in the className, so in this current example the div will have the following styles applied to it:

- Font will be bold
- Text aligned left
- Margin bottom 0.5rem

## Skeleton<a name="skeleton"></a>

We were conscious the website was going to be used in Senegal and that the internet connection there may not be as fast as in Switzerland. For that reason, we optimised images and wanted to integrate a [loading skeleton](https://www.npmjs.com/package/react-loading-skeleton).
We used that [guide](https://medium.com/creditas-tech/react-suspense-swr-skeleton-e1979e9f32f0) but infortunaly we didn't have enough time to integrate it on every pages and to make it looks as good as it could. However the user can still see when a page is loading by seeing some 'skeletons' so that should improve the user experience.

## Progress bar<a name="progressBar"></a>

To make the progress bar which is in the quiz, we used this [guide](http://kodhus.com/newsite/step-progress-bar-css-only/) and changed a few things like colours and made it responsive.

## Icons<a name="icons"></a>

For the icons we used the following library : [React Icons](https://react-icons.github.io/react-icons/) it uses a wide choices of icons and is very easy to integrate.
