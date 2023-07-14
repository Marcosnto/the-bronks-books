import { SubmitHandler, useForm } from "react-hook-form";
import { Book } from "../utils/types/components";
import Button from "../components/Button";
import FormLabel from "../components/Form/FormLabel";
import postBook from "../api/postBook";
import ErrorMessage from "../components/Form/ErrorMessage";

export default function RegisterBook() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Book>();

  const onSubmit: SubmitHandler<Book> = (data) => {
    if (isValid) {
      postBook(data);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold mb-5">Cadastrar livro</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center flex-col w-6/12 gap-5"
      >
        <div className="flex flex-col">
          <FormLabel htmlFor="author" label="Autor" />
          <input
            id="author"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("author", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.author && <ErrorMessage message={errors.author.message} />}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="title" label="Título" />
          <input
            id="title"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("title", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.title && <ErrorMessage message={errors.title.message} />}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="country" label="País" />
          <input
            id="country"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("country", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.country && <ErrorMessage message={errors.country.message} />}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="imageLink" label="Link da imagem" />
          <input
            id="imageLink"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("imageLink", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.imageLink && (
            <ErrorMessage message={errors.imageLink.message} />
          )}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="language" label="Lingua" />
          <input
            id="language"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("language", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.language && (
            <ErrorMessage message={errors.language.message} />
          )}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="pages" label="Número de páginas" />
          <input
            id="pages"
            type="number"
            className="p-2 border-solid rounded-md"
            {...register("pages", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.pages && <ErrorMessage message={errors.pages.message} />}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="year" label="Ano de lançamento" />
          <input
            id="year"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("year", {
              required: "Esse campo é obrigatório",
              pattern: {
                value: /\d/,
                message: "Somente números",
              },
            })}
          />
          {errors.year && <ErrorMessage message={errors.year.message} />}
        </div>

        <div className="flex flex-col">
          <FormLabel htmlFor="price" label="Preço" />
          <input
            id="price"
            type="text"
            className="p-2 border-solid rounded-md"
            {...register("price", {
              required: "Esse campo é obrigatório",
            })}
          />
          {errors.price && <ErrorMessage message={errors.price.message} />}
        </div>

        <div className="justify-center">
          <Button type="submit" label="Adicionar Livro" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}
