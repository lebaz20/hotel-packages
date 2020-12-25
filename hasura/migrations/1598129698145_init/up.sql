CREATE TABLE public.package (
    "packageId" integer NOT NULL,
    name text NOT NULL,
    duration text NOT NULL,
    price money NOT NULL,
    validity text NOT NULL,
    description text NOT NULL
);
CREATE SEQUENCE public.package_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.package_id_seq OWNED BY public.package."packageId";
ALTER TABLE ONLY public.package ALTER COLUMN "packageId" SET DEFAULT nextval('public.package_id_seq'::regclass);
ALTER TABLE ONLY public.package
    ADD CONSTRAINT package_pkey PRIMARY KEY ("packageId");
